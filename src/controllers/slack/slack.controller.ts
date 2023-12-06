import { announce } from '@services/slack/slack.service';

import { generalSlackBodyDto } from './slack.dto';

export const announceRedBull = (body: generalSlackBodyDto) => {
    announce(body);
};
