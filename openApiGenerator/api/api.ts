export * from './default.service';
import { DefaultService } from './default.service';
export * from './members.service';
import { MembersService } from './members.service';
export const APIS = [DefaultService, MembersService];
