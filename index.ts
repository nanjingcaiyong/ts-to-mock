import jsf from 'json-schema-faker';
import * as TJS from "typescript-json-schema";
import { resolve } from "path";

const settings: TJS.PartialArgs = {
  required: true,
};

const compilerOptions: TJS.CompilerOptions = {
  strictNullChecks: true,
};

const program = TJS.getProgramFromFiles(
  [resolve("./src/user.ts")],
  compilerOptions
  // basePath
);


const schema = TJS.generateSchema(program, "ShapesData", settings);
const syncValue = jsf.generate(schema as any);

console.log(syncValue)
