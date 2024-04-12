///////////////////////////////////////////////
// import libraries via "etc/deps.ts"
import {
  dallmo_util_yaml,
  oauth2,
  assert,
} from "./etc/deps.ts";

///////////////////////////////////////////////
// import interfaces via "etc/interfaces.ts"
/*
import {
} from "./etc/interfaces.ts";
*/
///////////////////////////////////////////////
// the main app goes here
async function main( config_file: any ): Promise<void> {
  
  // get the env vars for credentials
  const BASECAMP_client_id     = Deno.env.get("BASECAMP_client_id");
  const BASECAMP_client_secret = Deno.env.get("BASECAMP_client_secret");

  const config_obj = await dallmo_util_yaml( config_file );
  console.log("config_obj : ", config_obj);

}; // function main
///////////////////////////////////////////////
export {
  main
};

