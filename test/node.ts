import NodeEnvironment from 'jest-environment-node';

export default class extends NodeEnvironment {
  async setup() {
    await super.setup();
    this.global.isNodeEnv = true;
  }

  async teardown() {
    this.global.isNodeEnv = undefined;
    super.teardown();
  }
}
