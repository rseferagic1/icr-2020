import { RouteOverviewModule } from './route-overview.module';

describe('RouteOverviewModule', () => {
  let routeOverviewModule: RouteOverviewModule;

  beforeEach(() => {
    routeOverviewModule = new RouteOverviewModule();
  });

  it('should create an instance', () => {
    expect(routeOverviewModule).toBeTruthy();
  });
});
