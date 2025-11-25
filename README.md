# spideymoji
"Like" reactions with a friendly neighborhood twist

<!-- document changes from figma designs here or in other md docs -->
<!-- changes will include:
    - setting dimensions of containers, reactions, etc
    - color constants
    - spacing constants
    - animations?
-->

## Design
The following are the reactions/emojis included by default with the library
<br>
| Emoji | Description |
| -------- | --------|
| ![spidey thwip emoji](img/spidey-thwip.png) |Spidey Thwip |
| ![spidey yay emoji](img/spidey-yay.png) |Spidey Yay |
| ![spidey love emoji](img/spidey-love.png) | Spidey Love |
| ![spidey love emoji](img/spidey-wow.png) | Spidey wow |
| ![spidey how emoji](img/spidey-huh.png) | Spidey huh |
| ![spidey sad emoji](img/spidey-sad.png) | Spidey sad |
| ![spidey angry emoji](img/spidey-angry.png) | Spidey angry |

### These are the colors used in the design files
#CE3434
<br>
#0059C7
<br>
#000000
<br>
#FFFFFF
<br>
#000000 | 40% opacity

### This is the text used for the reactions
- Thwip
- Yay
- Love
- Wow
- Huh
- Sad
- Angry

### Button States
There are three main button states:
- Unselected
- Hovered
- Selected

When the button is unselected, it has the default Thwip reaction in a grey color. Hover behavior is still being determined. When the button has been clicked from an unselected state or a reaction is selected, the button takes on the selected state, which shows the reaction that was selected. If the button was simply clicked without selecting a specific reaction, it hsoulds the default Thwip reaction in the selected state.