import { useRouteError, isRouteErrorResponse } from "react-router-dom";

function NotFound() {
  const error = useRouteError();
  if (!isRouteErrorResponse(error)) return null;

  if (error.status === 404) {
    return <div>404 Not Found!</div>;
  }

  if (error.status === 401) {
    return <div>401 You aren't authorized to see this</div>;
  }

  if (error.status === 503) {
    return <div>503 Looks like our API is down</div>;
  }

  if (error.status === 418) {
    return <div>418 🫖</div>;
  }
  return null;
}
export default NotFound;
