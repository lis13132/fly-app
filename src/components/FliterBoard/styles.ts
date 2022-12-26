

interface StyleSheet {
    [key: string]: React.CSSProperties;
  }

export const styles: StyleSheet = {
  filterCardContainer: {
    display: "flex",
    flexDirection: "column",
    width: '120px',
    height: '180px',
    backgroundColor: "white",
    marginTop: "8px",
    borderRadius: '8px',
    padding: '10px'
  },
  labelList: {
    flex: 1,
    display: 'flex',
    flexDirection: "column",
    fontSize: "7pt",
    color: '#777777',
    justifyContent: "space-around",
    paddingTop: '5px'
  },
  buttonGroup: {
    alignContent:'center',
    paddingTop: '10px',
    paddingBottom: '10px'
  },
  textFilter: {
    fontSize: "6pt",
    color: '#777777',
  },
  label: {
    cursor: "pointer"
  }


}