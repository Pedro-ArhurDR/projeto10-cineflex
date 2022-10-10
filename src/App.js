import styled from "styled-components"
import Container from "./Container"
export default function App(){

    return( 
        <Globalstyle>
            <Container/>
        </Globalstyle>
    )
}

const Globalstyle = styled.div`
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
text-decoration:none;
`