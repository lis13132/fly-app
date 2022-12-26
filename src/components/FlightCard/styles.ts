interface StyleSheet {
    [key: string]: React.CSSProperties;
  }

export const styles: StyleSheet = {
  cardContainer: {
    backgroundColor: "white",
    margin: '8px',
    width: '340px',
    height: '100px',
    alignItems: 'space-around',
    borderRadius: '8px',
    boxShadow: '1px 2px 2px #EFF1F3',
  },
  leftBlock: {
    flexDirection: "column",
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRight: '1px solid #EFF1F3'
  },
  rightBlock: {
    flexDirection: "column",
    padding: '10px',
    flex: 1,
  },
  timeText: {
    fontSize: '19px',
  },
  stopsText: {
    fontSize: '12px',
  },
  pleaceContainer: {
    justifyContent: "space-between"
  },
  pleaceText: {
    fontSize: '8px',
    fontWeight: 'bold'
  },
  dateContainer: {
    justifyContent: "space-between"
  },
  greySmallText: {
    fontSize: '8px',
    color: 'grey',
  },
  row:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
  },
  stopsWrapper: {
    flexDirection: 'column',
    alignItems: "center",
  },
   buyButton:{
    backgroundColor: '#FF6D00',
    width: '100px',
    height: '33px',
    border: '0px',
    color: 'white',
    borderRadius: '5px',
    textAlign:'center',
    fontSize: '9pt',
    marginLeft: '15px',
    marginBottom: '15px',
    marginRight: '15px',
    marginTop: '0px',
    cursor: "pointer"
  },
  carrierLogo:{
    maxHeight: '35px', 
    maxWidth: '100px',
    marginLeft: '15px',
    marginBottom: '0px',
    marginRight: '15px',
    marginTop: '15px',
  },
  arrowImg: {
    width: '68px',
    height: '7px',
  },

}