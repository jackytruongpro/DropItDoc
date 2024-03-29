var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/jackytruongpro/DropItDoc', // Update to point to your repository
        user: {
            name: 'jackytruongpro', // update to use your name
            email: 'jacky-t@hotmail.fr' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);