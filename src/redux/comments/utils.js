export function toReducerComments(data = []) {
  return data.map((it) => {
    return {
      ...it,
      user: {
        ...it.user,
        avatarUrl: it.user[`avatar_url`],
        isPro: it.user[`is_pro`],
      },
    };
  });
}
