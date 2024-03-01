import { prismaClient } from '@clients';
import { loginBodyDto, registerBodyDto } from '@controllers/auth';
import { isDefined } from '@utils/validators';

export class authService {
    static login = async (ctx: loginBodyDto) => {
        const { username, password } = ctx.body;

        const result = await prismaClient.users.findFirst({
            where: {
                username: username,
            },
        });

        if (isDefined(result) && isDefined(result.password)) {
            const isValid = await Bun.password.verify(
                password,
                result.password
            );

            if (isValid) {
                ctx.log.info(`User ${result.id} has logged in!`);

                ctx.cookie.token.set({
                    value: await ctx.jwt.sign(ctx.params),
                    httpOnly: true,
                    maxAge: 60 * 60 * 2,
                    path: '/',
                });

                return {
                    message: `Successfully logged.`,
                };
            }

            ctx.set.status = 400;
            return {
                message: 'Invalid password!',
            };
        }

        ctx.set.status = 500;
        ctx.log.error('User not found!');
        return {
            message: 'User not found!',
        };
    };

    static register = async (ctx: registerBodyDto) => {
        const { username, firstname, lastname, password, confirmPassword } =
            ctx.body;

        if (password !== confirmPassword) {
            ctx.set.status = 500;
            ctx.log.error('Passwords do not match!');
            return {
                message: 'Passwords do not match!',
            };
        }

        await prismaClient.users
            .create({
                data: {
                    username,
                    first_name: firstname,
                    last_name: lastname,
                    password: await Bun.password.hash(password, {
                        algorithm: 'bcrypt',
                        cost: 4,
                    }),
                    counter: {
                        create: {},
                    },
                },
            })
            .then((result) => {
                ctx.log.info(`Created user ${result.id}`);
                return { message: `Created user ${result.id}` };
            });
    };
}
