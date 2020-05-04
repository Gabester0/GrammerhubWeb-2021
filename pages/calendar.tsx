import Layout from '../components/MyLayout'
import MyCalendar from '../components/MyCalendar'
import '../node_modules/react-big-calendar/lib/css/react-big-calendar.css'

const layoutStyle = {
    display: 'grid',
    gridGap: '10px',
    leftSide: {
        gridColumn: '1 / span 1'
    },
    rightSide: {
        gridColumn: '2 / span 1'
    }
}


export default () => (
  <Layout> 
    <div style={layoutStyle}>
        <div style={layoutStyle.leftSide}>
            this is the left side
        </div>
        <div style={layoutStyle.rightSide}>
            <MyCalendar/>
        </div>
    </div>
  </Layout>
)