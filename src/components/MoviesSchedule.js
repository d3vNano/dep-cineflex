import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";

function SessionsFunc (props) {
    return (
        <>
        <p>`${props.weekday} - ${props.date}`</p>
        </>
    )
}

function RenderSessions () {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/sessions.id}/showtimes`)
        promise.then(res => {
            setSessions(console.log([...res.data.days]))
        })
    }, [])

    return (
        <>
            {sessions.map((session, index) => 
                <SessionsFunc
                    key={index}
                    id={session.days[index].id}
                    weekday={session.weekday}
                    date={session.date}
                />
            )}
        </>
    )
}

export default function SessionsList () {
    return (
        <SessionsTable>
            <p>Selecione o horário</p>
                <RenderSessions />
        </SessionsTable>
    )
}

const SessionsTable = styled.div`
    background-color: red;
`