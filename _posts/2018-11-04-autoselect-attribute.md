You used a feature today that is so helpful and ubiquitous that there is actually a proposal to have it added to the HTML spec (it's my proposal!).

I'm talking about auto-select. What is this? Let me explain.

## Autoselect is good
When you focus on an input by clicking, tabbing to it, or by some other means and the whole value of the input is automatically highlighted or _selected_, that is auto-select. And auto-select is good! The behavior is helpful in several ways.

First, when applied to a search use case, auto-selecting the value enables the user to immediately begin typing their next query without any additional interactions such as highlighting the value with their pointer, pressing and holding the backspace key, or in the case of inexperienced users who feel they need to navigate to the end of the value using the arrow keys in order to begin deleting the value. By selecting the value automatically the user will get a visual indication that the input is ready to be deleted. This affordance gives experienced users a que that the field is ready to receive new input, with the most experienced users going straight into typing another query and lesser experienced users pressing backspace one time to clear the field before typing their query. For users accustomed to pressing and holding backspace, they will be delighted to see the whole value immediately disappear on keypress.

Second, auto-selecting enables faster recovery when mistakes are made or when unexpected results occur. In the case of mistakes, users who are presented with an already selected value can type their correction without any exra interaction required. This is especially great for sign in UX when users accidently type the wrong credentials or are quickly trying multiple credentials if they don't remember which they may have registered with. In the case where no mistake was made in the value entered in the field but the results were unexpected, e.g. no results or irrelavant results found, it's convenient to be able to quickly iterate with new values until desired results are achieved.

Lastly, fields where there is a higher probability that the user will want to copy or cut the value auto-selecting is again convenient. You're a developer and therefore a power user. Most users are not like you. There are users who, wanting to copy, will user their mouse to carefully highlight text in the field, navigate their pointer to the Edit menu, move down to Copy or Cut and click. They will then user their mouse to the Edit menu then Paste. It can actually be worse: Edit > Select all, Edit > Copy, Edit Paste. Sad, but true. Even power users though still stand to benefit. How many times a day do you `Ctrl + A` or `Cmd + A`? For many of those instances it would of been totally appropriate had the UI auto-selected for you.

In all cases the behavior benefits both power users and users with disabilities, two groups who need to minimize interaction through optimal keyboard use. Less experienced users stand to benefit as well and the behavior helps faciliate discovery, a process every power user had to go through themselves.

## The proposal
If couldn't be more simple:
```
<input autoselect>
```
That's it. Well that's it for you anyway. The mysterious people who implement this stuff in browsers would have some work to do. Although it's not too far off from things they've already implemented:
```
<input autofocus>
```
The handy `autoselect` boolean attribute replaces custom solutions that often look like this:
```js
$('.autoselect')
    .on('focus', () => { 
        if (this.value) this.select(); 
    })
    .on('blur', () => { 
        var tagName = this.nodeName.toLowerCase();
        if (tagName == 'textarea' || (tagName == 'input' && this.type == 'text') ) {
            this.selectionStart = this.selectionEnd;
        }
    });
```
Or without jQuery/Zepto:
```js
let autoselects = document.getElementsByClassName('.autoselect');

Array.from(autoselects).forEach((el) => {
  el.addEventListener('focus', () => { 
    if (this.value) this.select(); 
  });
  
  el.addEventListener('blur', () => { 
    let tagName = this.nodeName.toLowerCase();
    if (tagName == 'textarea' || (tagName == 'input' && this.type == 'text') ) {
      this.selectionStart = this.selectionEnd;
    }
  });
});
```
You'd want to actually have an array of valid `type`s to look in since "text" isn't the only one and not all are applicable.

If `autoselect` is something you'd like to have available to you, head over to [the proposal](https://github.com/whatwg/html/issues/3627) and upvote. And if you're one of the secret browser people who make this stuff happen, send me a link to your backlog and I'll help you get the party started ;)
