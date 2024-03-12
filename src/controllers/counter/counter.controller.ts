import { CounterService } from '@services/counter';
import { addOneBodyDto } from './counter.dto';

export class CounterController {
    static addOne = async (ctx: addOneBodyDto) => {
        return CounterService.addOne(ctx);
    };
}
