import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import type { ListenOptions } from "net";
import { schema } from "./schema";

const port = process.env.PORT ? parseInt(process.env.PORT) : 4000;

const createApolloServer = async (
  listenOptions: ListenOptions = { port: port }
) => {
  const server = new ApolloServer({ schema });

  const { url } = await startStandaloneServer(server, {
    listen: listenOptions,
  });

  return { server, url };
};

export { createApolloServer };
