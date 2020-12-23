
enum Endpoints {
  GUILDS = 'http://discord.com/api/v6/users/@me/guilds',
  BASE_GUILD = 'http://discord.com/api/v6/guilds',
}

enum PermissionFlag {
  MANAGE_GUILD = 0x20
}

export { Endpoints, PermissionFlag }