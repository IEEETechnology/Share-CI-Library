# Contribution Guidelines

## Procedures

1. [Fork this repository on GitHub](https://github.com/IEEETechnology/Share-CI-Library/fork)
2. Go to the forked repository in your account, e.g., `username/Share-CI-Library`
3. There are two ways to modify the contents:
   1. [Editing files in your repository](https://help.github.com/en/articles/editing-files-in-your-repository)
   2. [Cloning and repository](https://help.github.com/en/articles/cloning-a-repository) which requires modifying the contents on your local computer. You can use either `Git Bash` or `GitHub Desktop` to perform the necessary Git processes (basically, clone, pull, commit, and push) After you clone the repository into your local computer, editing can be done along with the commit. Finally, you need to push the committed changes to your remote repository.
4. [Create a pull request from a fork](https://help.github.com/en/articles/creating-a-pull-request-from-a-fork) to notify the repository maintiner about the changes you have made

> Note that: you can see the detailed procedures on these tutorials:
>
> - https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github
> - https://thenewstack.io/getting-legit-with-git-and-github-your-first-pull-request/

## Create a Blog Post

1. Go to `content` > `posts` directory, then create a new directory in the format `YYYY-MM-DD-YOUR-POST-TITLE`. For instance, `2019-09-06-welcome-to-share-ci-library` as you can see an example from the directory.
2. Create or copy a markdown file named `index.md` inside the created directory.
3. The header part (frontmatter) must be formatted with these attributes:

   - **title**: a string indicates the title of your new post
   - **slug**: the url path to the post
   - **date**: the created date of the post
   - **tags**: this post relates to which tags

     For example,

     ```
         title: "Welcome to Share CI Library"
         slug: welcome-to-share-ci-library
         date: 2019-09-06
         tags:
         - general
         - share-ci-library
     ```

4. Adding a cover photo,
   1. If you want to customize the cover image, you can add a cover image file inside the created directory and name it such as `cover.png`.
   2. Specify the cover file name (e.g., `cover.jpg`) in `index.md` file in the part of frontmatter.
      ```
      cover: ./cover.jpg
      ```
5. Adding images in a post

   1. Place the images inside the created directory to indicate that these images belong to the post (e.g., inside `content/posts/2019-09-06-welcome-to-share-ci-library`)
   2. Use the markdown syntax \[alt text\]\(url\) to display an image in a post

6. The content of your post can be styled by using [Markdown Syntax](https://www.gatsbyjs.org/docs/mdx/markdown-syntax/)

## Add a Repository Link

1. Go to `content` > `repos` > `repositories` > `repositories.md` file.
2. Append a new element of a project in the `projects` attribute.

   ```
   projects:
   - title: Share CI Library
       description: This is a short description
       url: https://github.com/IEEETechnology/Share-CI-Library
   - title: IEEE CIS
       description: This is a short description
       url: https://cis.ieee.org
   ```

3. For instance, to add a new repository named `Example`, with the short description `An example of a new repository` and url `https://www.example.com`. Therefore, the project list will become like this.
   ```
   projects:
   - title: Share CI Library
       description: This is a short description
       url: https://github.com/IEEETechnology/Share-CI-Library
   - title: IEEE CIS
       description: This is a short description
       url: https://cis.ieee.org
   - title: Example
       description: An example of a new repository
       url: https://www.example.com
   ```

## Thank you for your contributions
