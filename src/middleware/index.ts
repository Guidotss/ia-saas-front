import type { APIContext, MiddlewareNext } from "astro";

export function onRequest(
  { request, locals }: APIContext,
  next: MiddlewareNext
) {
  /* console.log("Hello from middleware!");
  console.log(request);
  */
 next(); 
}
