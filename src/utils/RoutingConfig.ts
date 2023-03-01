export const routingControllerOptions = {
  cors: true,
  routePrefix: "",
  controllers: [__dirname+'/../controllers/*{.ts,.js}'],
  middlewares: [`${__dirname}/../middlewares/*{.ts,.js}`],
  defaultErrorHandler : false,
};