import { fetchUser } from "../ultils/FetchLocalStorage"

const userInfo=fetchUser();

export const initalState={
        user:userInfo,
}