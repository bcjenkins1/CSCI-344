#include <stdio.h>
#include <stdlib.h> // for malloc
struct tnode {
        int data;
        struct tnode*   left;
        struct tnode*   right;
};

void print_tree(struct tnode tree)
{
        printf("root: %d\n", tree.data);

        struct tnode* subtree = tree.left;
        while(subtree != NULL)
        {
                printf("%d\n", subtree->data);
                subtree = subtree->left;
        }
        subtree = tree.right;
        while(subtree != NULL)
        {
                printf("%d\n", subtree->data);
                subtree = subtree->left;
        }
}


int main()
{
        // Option 1: the 'root' of the tree is a thing;
        // everything else is a pointer

        // build a tree with nodes 5 10 7 12 3
        struct tnode root;
        root.data = 5;
        root.left = NULL;
        root.right = NULL;

        // insert 10 to the tree
        root.right = (struct tnode*) malloc(sizeof(struct tnode));
        root.right->data = 10;
        root.right->left = NULL;
        root.right->right = NULL;

        // or instead:
        struct tnode* child = (struct tnode*) malloc(sizeof(struct tnode));
        child->data = 10;
        child->data = 10;
        child->left = NULL;
        child->right= NULL;

        root.right = child;

        print_tree(root);

        // Option 2: it's pointers all the way down

        struct tnode* root;
        root = (struct tnode*) malloc (sizeof(struct tnode));
        root->data = 5;
        root->left = NULL;
        root->right = NULL;

        root->right = (struct tnode*) malloc (sizeof(struct tnode));
        root->right->data = 10;
        root->right->left = NULL;
        root->right->right = NULL;

        print_tree(root);





}
