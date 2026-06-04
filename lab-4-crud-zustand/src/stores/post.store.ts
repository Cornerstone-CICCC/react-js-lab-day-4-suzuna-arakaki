import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

export interface Post {
  id: string | number;
  title: string;
  content: string;
  isDeleted: boolean;
}

type State = {
  posts: Post[];
};

type Action = {
  addPost: (title: string, content: string) => void;
  editPost: (id: string | number, title: string, content: string) => void;
  deletePost: (id: string | number) => void;
  recoverPost: (id: string | number) => void;
  deletePermanently: (id: string | number) => void;
};

export const usePostStore = create<State & Action>()(
  persist(
    (set) => ({
      posts: [],
      addPost: (title, content) =>
        set((state) => ({
          posts: [
            {
              id: uuidv4(),
              title: title,
              content: content,
              isDeleted: false,
            },
            ...state.posts,
          ],
        })),
      editPost: (id, title, content) =>
        set((state) => ({
          posts: state.posts.map((post) =>
            post.id === id ? { ...post, title: title, content: content } : post,
          ),
        })),
      deletePost: (id) =>
        set((state) => ({
          posts: state.posts.map((post) =>
            post.id === id ? { ...post, isDeleted: true } : post,
          ),
        })),
      recoverPost: (id) =>
        set((state) => ({
          posts: state.posts.map((post) =>
            post.id === id ? { ...post, isDeleted: false } : post,
          ),
        })),
      deletePermanently: (id) =>
        set((state) => ({
          posts: state.posts.filter((post) => post.id !== id),
        })),
    }),
    {
      name: "post-storage",
    },
  ),
);
