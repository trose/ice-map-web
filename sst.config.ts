import { SSTConfig } from "sst";
import { StaticSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "ice-map-web",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new StaticSite(stack, "site", {
        path: ".",
        buildOutput: "dist",
        buildCommand: "npm run build",
      });

      stack.addOutputs({
        url: site.url,
      });
    });
  },
} satisfies SSTConfig;