import { actions, follow, unfollow } from "./users-reducer"
import { usersAPI } from "../api/users-api"
import { APIResponseType, ResultCodeEnum } from "../api/api"

jest.mock("../api/users-api")
const usersApiMock = usersAPI as jest.Mocked<typeof usersAPI>
const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
	dispatchMock.mockClear()
	getStateMock.mockClear()
	usersApiMock.follow.mockClear()
	usersApiMock.unfollow.mockClear()
})

const result: APIResponseType = {
	resultCode: ResultCodeEnum.Success,
	messages: [],
	data: {}
}

test("success follow thunk", async () => {
	usersApiMock.follow.mockReturnValue(Promise.resolve(result))

	const thunk = follow(1)
	
	await thunk(dispatchMock, getStateMock, {})

	expect(dispatchMock).toBeCalledTimes(3)
	expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 1))
	expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess(1))
	expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, 1))
})

test("success unfollow thunk", async () => {
	usersApiMock.unfollow.mockReturnValue(Promise.resolve(result))

	const thunk = unfollow(1)
	
	await thunk(dispatchMock, getStateMock, {})

	expect(dispatchMock).toBeCalledTimes(3)
	expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 1))
	expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollowSuccess(1))
	expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, 1))
})