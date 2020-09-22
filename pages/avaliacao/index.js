import React from 'react';
import Badge from '@bit/nexxtway.react-rainbow.badge';

const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faStar } = require('@fortawesome/free-solid-svg-icons');
const css = { margin: 5 }

export default () => {
    return (
 <>
<p>
	<Badge variant="inverse" title="the badge title" style={css}>
			<FontAwesomeIcon icon={faStar} pull="left" size="lg" />
            <FontAwesomeIcon icon={faStar} pull="left" size="lg" />
            <FontAwesomeIcon icon={faStar} pull="left" size="lg" />
            <FontAwesomeIcon icon={faStar} pull="left" size="lg" /> 
            <FontAwesomeIcon icon={faStar} pull="left" size="lg" /> 
			 Episódio I: A Ameaça Fantasma (1999)  
    </Badge>
    </p>
        <br></br>
        <p>
	<Badge variant="inverse" title="the badge title" style={css}>
			<FontAwesomeIcon icon={faStar} pull="left" size="lg" />
            <FontAwesomeIcon icon={faStar} pull="left" size="lg" />
            <FontAwesomeIcon icon={faStar} pull="left" size="lg" />
            <FontAwesomeIcon icon={faStar} pull="left" size="lg" />  
            Episódio VI: O Retorno do Jedi (1983)
    </Badge>
    </p>
    <br></br>
        <p>
	<Badge variant="inverse" title="the badge title" style={css}>
			<FontAwesomeIcon icon={faStar} pull="left" size="lg" />
            <FontAwesomeIcon icon={faStar} pull="left" size="lg" />
            <FontAwesomeIcon icon={faStar} pull="left" size="lg" />
            
			 Episódio I: A Ameaça Fantasma (1999)  
    </Badge>
    </p>
    <br></br>
        <p>
	<Badge variant="inverse" title="the badge title" style={css}>
			<FontAwesomeIcon icon={faStar} pull="left" size="lg" />
            <FontAwesomeIcon icon={faStar} pull="left" size="lg" />
 
            Episódio VIII: Os Últimos Jedi (2017) 
    </Badge>
    </p>
    <br></br>
        <p>
	<Badge variant="inverse" title="the badge title" style={css}>
			<FontAwesomeIcon icon={faStar} pull="left" size="lg" />
  
			Episódio IX: A Ascensão Skywalker (2019)
    </Badge>
    </p>
    </>
 
    )
    }


 
