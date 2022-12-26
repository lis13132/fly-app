interface StyleSheet {
  [key: string]: React.CSSProperties;
}

export const styles: StyleSheet = {
  head: {
    flex: 1,
    flexDirection: 'column',
  },
  screen: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:"center",
  },
  cardsContainer: {
    marginLeft: '20px',
    flexDirection: 'column',
    width: '340px',
    height: '100%'
  },
  flyLogo:{
    width: '40px',
    height: '40px',
  },
  logoBox:{
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
    width: '100%',
  }

}