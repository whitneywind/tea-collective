import { Outlet } from "react-router-dom";
// to-do: confirm that outlet can be only thing returned
export default function Root() {
    return (
        <Outlet />
    );
  }