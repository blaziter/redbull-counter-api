import { slackService } from '@services/slack';
import { generalSlackBodyDto } from './slack.dto';

export class slackController {
    static announceRedBull = (body: generalSlackBodyDto) => {
        return slackService.announce(body);
    };
}
