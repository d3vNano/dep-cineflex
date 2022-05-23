import styled from "styled-components";
import axios from "axios";

function RenderSessions () {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movie.id}/showtimes`)
}

export default function MoviesSchedule () {
    return (
        <SessionsTable>
            <p>Selecione o horário</p>
            <p>O RESTO AQUI</p>
        </SessionsTable>
    )
}

const SessionsTable = styled.div`
    background-color: red;
`