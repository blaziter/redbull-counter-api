import { counterService } from '@services/counter';
import { addOneBodyDto } from './counter.dto';

export class counterController {
    static addOne = async (ctx: addOneBodyDto) => {
        return counterService.addOne(ctx);
    };
}
