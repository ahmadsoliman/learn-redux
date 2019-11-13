export class Post {
  constructor(
    public code: string,
    public caption: string,
    public likes: number,
    public id: string,
    public display_src: string
  ) { }
  public static createNew(): Post {
    return new Post('', '', 0, '', '');
  }
}

export class PostComment {
  constructor(
    public text: string,
    public user: string
  ) { }
  public static createNew(): PostComment {
    return new PostComment('', '');
  }
}

export type AllComments = { [postCode: string]: PostComment[] };