import an18 from '@mmstudio/an000018';

/**
 * 退出登录
 */
export default async function user_logout(sessionid: string) {
	await an18(sessionid);
	// const user = await an17<IUserInfo>(sessionid);
	// if (user) {
	// 	// remove session
	// 	await an18(sessionid);
	// 	await an14('sys', ['delete from user_auths where identity_type=$1 and user_id=$2', ['rememberme', user.id]]);
	// }
}
