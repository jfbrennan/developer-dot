You used a feature today that is so helpful and ubiquitous that there is actually a proposal to have it added to the HTML spec (it's my proposal!).

I'm talking about auto-select. What is this? Let me explain.

## Autoselect is good
When you focus on an input by clicking, tabbing to it, or by some other means and the whole value of the input is automatically highlighted or _selected_, that is auto-select. And auto-select is good! The behavior is helpful in several ways.

First, when applied to a search use case, auto-selecting the value enables the user to immediately begin typing their next query without any additional interactions such as highlighting the value with their pointer, pressing and holding the backspace key, or in the case of inexperienced users who feel they need to navigate to the end of the value using the arrow keys in order to begin deleting the value. By selecting the value automatically the user will get a visual indication that the input is ready to be deleted. This affordance gives experienced users a que that the field is ready to receive new input, with the most experienced users going straight into typing another query and lesser experienced users pressing backspace one time to clear the field before typing their query. For users accustomed to pressing and holding backspace, they will be delighted to see the whole value immediately disappear on keypress.

Second, auto-selecting enables faster recovery when mistakes are made or when unexpected results occur. In the case of mistakes, users who are presented with an already selected value can type their correction without any exra interaction required. This is especially great for sign in UX when users accidently type the wrong credentials or are quickly trying multiple credentials if they don't remember which they may have registered with. In the case where no mistake was made in the value entered in the field but the results were unexpected, e.g. no results or irrelavant results found, it's convenient to be able to quickly iterate with new values until desired results are achieved.

Lastly, fields where there is a higher probability that the user will want to copy or cut the value auto-selecting is again convenient.

In all cases the behavior is beneficial for power users, less experienced users, and users with disabilities.
