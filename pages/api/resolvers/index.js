import axios from "axios";

export const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        const users = axios.get("https://api.github.com/users");
        return users.data.map(({ id, login, avatar_url }) => ({
          id,
          login,
          avatar_url,
        }));
      } catch (err) {
        throw err;
      }
    },

    getUser: async (_, args) => {
      try {
        const user = axios.get(`https://api.github.com/users/${args.name}`);
        return {
          id: user.data.id,
          login: user.data.login,
          avatar_url: user.data.avatar_url,
        };
      } catch (err) {
        throw err;
      }
    },
  },
};

/*
    matching the queries name defined earlier on the GraphQL Schema with the resolver functions.
    The getUsers function enables us to retrieve all users from the API and then return an array 
    of users that needs to mirror the User type. Next, we use the getUser method to fetch a single
    user with the help of the name passed in as a parameter
*/
