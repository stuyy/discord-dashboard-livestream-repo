import React from 'react';
import { useQuery } from '@apollo/client';
import { GuildConfigComponent, SpinnerComponent } from '../../components';
import { getGuildConfigQuery } from '../../graphql/queries/getGuildConfig';
import './index.css';
import { connect } from 'react-redux';


function GuildConfigPageDefault({
  history,
  match,
  ...props
} ) {
  const { id } = match.params;
  const { loading, error, data } = useQuery(getGuildConfigQuery, {
    variables: { guildId: id }
  });
  const [componentLoading, setComponentLoading] = React.useState(true);
  if (!loading) setTimeout(() => setComponentLoading(false), 1000);
  if ( !componentLoading ) {
    const { setUser } = props;
    setUser({ data });
    const { getRoles, getGuildConfig, getChannels } = data;
    return (
      <div className="guild-config-root">
        <GuildConfigComponent
          guildId={id}
          channels={getChannels}
          roles={getRoles}
          guildConfig={getGuildConfig}
          match={match}
        />
      </div>
    );
  } else {
    return (
      <div className="guild-config-root">
        <SpinnerComponent />
      </div>
    );
  }
};

const mapStateToProps = ( state ) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    setUser: (user) => dispatch({ type: "SET_USER", user }),
  };
}

export const GuildConfigPage = connect(mapStateToProps, mapDispatchToProps)(GuildConfigPageDefault);