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

-  **Chart type:** line chart  
-  **Why you chose it:** Line charts show the clear trend of one metric when x-axis goes up/down. I would like to show the survival trend varies when the age goes up so I chose a line chart to visualize it.  
- **X and Y axis variable:**  
x = Age Groups, categorized from the original age data to 7 age groups.  
y = Survival Rate. I used percentage as y-axis because the absolute numbers of female/male in each age group are not equal. To compare the chance of survival across age groups, I chose the survival rate as the y-axis.  
- **Another other features:**  colour coding to differtiate gender data.

##### Graph2. Survival Rate Across Class
Bar chart is used here for simply comparing the survival rate by class. 

-  **Chart type:** Bar chart  
-  **Why you chose it:** The idea of this graph is showing the comparison between class catogories so I chose bar chart to show the survival rate across 3 classes.    
- **X and Y axis variable:**  
x = Class, from upper class to lower class (1, 2 and 3)  
y = Survival Rate. I used percentage as y-axis for the same reason of graph 1.  
- **Another other features:**  



##### Graph3. Survival Rate by Deck
Although it shows higher survival rate in upper class, I noticed that Titanic has 9 decks from the top(A) to the bottom(G).

I put decks in the y-axis from the top to the bottom to follow the deck plan of Titanic. One deck doesn't limit to one class. At deck D, E and F, there are multiple classes at one deck. They provide us a good reference to check the survival rate for passengers staying at the same deck but in different classes. If the mouse hoveres on the deck containing different classes, I used **orange** to highlight the survival across classes to let the readers know that those elements are grouped to be compared together. 

-  **Chart type:** Scatter plot + Pie Chart (not normal scattor plot since I used pie chart rather than a simple dot to show the survival/death rate)
-  **Why you chose it:** The idea of this graph is showing the comparison between class catogories and the deck floors. Since pie charts are hard for reader to compare the survival/death rate by angle, I customized clear tooltips to show data details.  
- **X and Y axis variable:**  
x = Class, from upper class to lower class (1, 2 and 3) 
y = Deck floor. I used percentage as y-axis for the same reason of graph 1.
Pie Chart = the survival/death rate.  
- **Another other features:**  
	- mouse-over color highlight: to help reader to compare the surivial rate at the same class and the same deck floor. It is worth noting that the survival rates across class for passengers at the same deck floor don't vary a lot.


# Feedback

1. Feedback for the version 1 (filename: titanic_dimple_v1.html)  
 - **Need more description for graph 3 according to 3 people I interewed:** 
At my first version, I only used graph titles to show what each graph trying to say. It worked on the first and the second graphs but it caused a lot of confusion on the third graph. The third graph is relatively complicating, especially for those who don't know about the Titanic deck plan. So I add more captions and details to decribe and explain the third graph. 

2. Feedback for the version 2 (filename: titanic_dimple_v2.html) 
 - **colour coding** - I have five separate variables - male, female, survival rate, survived, died - As the reviewer suggested I chose a distinct colour for each. 
 - **add passenger count in graph3** - to add a different dimension to the data and enables the reader to decide how significant a result is. 
 - **customize tooltips** - it would be much easier for the reader if the names were more accessible. As the suggestions, I customized the tooltips, for example, "Passenger Class" instead of "Pclass", "Survival Rate" instead of "PassengerId", "Deck level" instead of "Cabin_cat".
 - **customize axis labels** - to reflect the labels in the tooltips if required. solved.
 - **pie bubbles tooltips disappeared** - solved.


# Resources
#### D3/Dimple References
1. [SVG Basic Builiding Block](https://www.dashingd3js.com/basic-building-blocks)
2. [D3 transition looping throwing Uncaught TypeError: t.call is not a function](http://stackoverflow.com/questions/38607647/d3-transition-looping-throwing-uncaught-typeerror-t-call-is-not-a-function)
3. [D3 Mouseover for multiple elements](http://stackoverflow.com/questions/29228428/d3-mouseover-for-multiple-elements)
4. [Formatting numbers with d3](http://bl.ocks.org/mstanaland/6106487)
5. [**For tooltips missing-** d3.js mouseover events clashing](https://stackoverflow.com/questions/16225065/d3-js-mouseover-events-clashing/16226375#16226375)

#### Titanic Backgroud References
1. [Titanic Data Info](https://www.kaggle.com/c/titanic)
2. [Titanic Deck Plan](https://www.encyclopedia-titanica.org/titanic-deckplans/)