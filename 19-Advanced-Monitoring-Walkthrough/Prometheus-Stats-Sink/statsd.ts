import { stats, BasicServer } from "realm-object-server";

const sink = new stats.StatsdStatsSink({
  hostname: 'instance-2',
  port: 9090,
  socketType: 'udp4',
  logger: undefined // or a Logger instance
});

const server = new BasicServer();
server.start({
  statsSink: sink,
  statsStorage: new stats.NullStatsStorage()
});
