# Steps To Start
Download the whole folder
Use **Terminal** to the folder and type
	**python -m SimpleHTTPServer** in commend line to start a local server to see the data visualization.



# Summary
Titanic dataset has 891 passengers' data. And after a basic analysis done before, there are a few factors making people more likely to survive. The factors are:

1. Demographic Factor - Female and kids have higher survival rate.
2. Class - if passengers stay at upper class, they might have a better chance to survive.


# Design
##### Graph1. Survival Rate Across Gender and Age Group
I used the line chart to show the survival rate trend across age groups and used  color to differentiate the survival rate by gender. 

##### Graph2. Survival Rate Across Class
Bar chart is used here for simply comparing the survival rate by class. 

##### Graph3. Survival Rate by Deck
Although it shows higher survival rate in upper class, I noticed that Titanic has 9 decks from the top(A) to the bottom(G).

I put decks in the y-axis from the top to the bottom to follow the deck plan of Titanic. One deck doesn't limit to one class. At deck D, E and F, there are multiple classes at one deck. They provide us a good reference to check the survival rate for passengers staying at the same deck but in different classes. If the mouse hoveres on the deck containing different classes, I used **orange** to highlight the survival across classes to let the readers know that those elements are grouped to be compared together. 

# Feedback
At my first version, I only used graph titles to show what each graph trying to say. It worked on the first and the second graphs but it caused a lot of confusion on the third graph. The third graph is relatively complicating, especially for those who don't know about the Titanic deck plan. So I add more captions and details to decribe and explain the third graph. 


# Resources
#### D3/Dimple References
1. [SVG Basic Builiding Block](https://www.dashingd3js.com/basic-building-blocks)
2. [D3 transition looping throwing Uncaught TypeError: t.call is not a function](http://stackoverflow.com/questions/38607647/d3-transition-looping-throwing-uncaught-typeerror-t-call-is-not-a-function)
3. [D3 Mouseover for multiple elements](http://stackoverflow.com/questions/29228428/d3-mouseover-for-multiple-elements)

#### Titanic Backgroud References
1. [Titanic Data Info](https://www.kaggle.com/c/titanic)
2. [Titanic Deck Plan](https://www.encyclopedia-titanica.org/titanic-deckplans/)