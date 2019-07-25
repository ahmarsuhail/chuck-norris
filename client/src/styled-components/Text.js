import styled from 'styled-components'

export default styled.div`
font-size: ${props => props.size}px;
cursor: ${props => (props.type === 'link') ? 'pointer': null}
:hover {
    color: ${props => (props.type === 'link') ? 'red': null}
}
` 