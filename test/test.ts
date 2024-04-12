/*
  sample test file :
  https://deno.land/x/dallmo_yaml/test/test.ts?source
*/
import {
  assert
} from "../etc/deps.ts";

import {
  main as basecamp_connector
} from "../mod.ts";

const config_file = "./etc/config.yaml";

await basecamp_connector( config_file );
