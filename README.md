# Check and Notifiy

- Check if a (twitter|github|...) username is free
- Check when a website goes down

- Check when a retweet is RT more than x times
- Check when a tweet have a reply, ...

- Check when a website become free
- Check when torvalds publish a new post on g+ (to be the first to comment)

- When there's full moon
- When webiste become famous (trafic +300% for example)

- When new StackOverflow question

# Install

```
# export env file (should run this manually after editting config/env file)
export $(cat config/env | xargs)
```

# IDEAS

- badge like github

# TODO

- notify() send mail
- if status=notif and no output, adding console.log() -> not shown
- add test for check removal
- 'isPending' in a new field
- when check open and editing, duplicate it (but don't run it) (maybe)
- check.output max length
- trim code, name
- move js/directives/editor to mixin
- add security checks for queue
- fix skipped check in chrome
