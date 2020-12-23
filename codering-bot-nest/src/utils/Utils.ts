import Guild from 'src/auth/interfaces/Guild';
import { PermissionFlag } from '../utils/Constants';

export const filterMutualGuilds = (userGuilds: Guild[], botGuilds: Guild[]) => {
  return userGuilds.filter((guild) => botGuilds.find((botGuild) => botGuild.id === guild.id && checkPermission(guild.permissions, PermissionFlag.MANAGE_GUILD)));
}

export const checkPermission = (permission: number, flag: PermissionFlag) => {
  return (permission & flag) === flag;
};