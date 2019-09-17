/* eslint-disable-next-line no-unused-vars */
import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import List from './List'
import ListItem from './ListItem'
import BlankUserAvatar from './blank-user-avatar.jpg'

storiesOf('List', module)
  .add('Single Component', () => ({
    components: { List },
    template: '<List><li>Component</li></List>'
  }))
  .add(`With ListItem`, () => ({
    components: { List, ListItem },
    template: `
      <List>
        <ListItem>
          ListItem Content
        </ListItem>
      </List>
    `
  }))
  .add(`Using ListItem Slots`, () => ({
    components: { List, ListItem },
    template: `
      <List>
        <ListItem>
          <template slot="prepend">
            <span style="margin: 0;">[Prepend]</span>
            <span style="margin: 0;">[Avatar]</span>
          </template>
          <template slot="append">[Append]</template>
          [Default]
          <template slot="sub">[Subtitle]</template>
        </ListItem>
        <ListItem>
          <template slot="prepend">
            <img src="${BlankUserAvatar}" width="40px"/>
          </template>
          <template slot="append">
            <p style="margin:0;margin-left: auto;">
              ${new Date().toLocaleDateString()}
            </p>
          </template>
          <p style="margin:0;">John March II</p>
          <template slot="sub"><p style="margin:0;">Administrator</p></template>
        </ListItem>
      </List>
    `
  }))
