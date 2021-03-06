import React from 'react';
import {
  SimpleCard, Loader, Grid, Typography,
} from 'components';
import { Query } from 'react-apollo';
import viewerLast100Repositories from 'graphql/queries/viewerLast100Repositories';

const ViewerRepoList = () => (
  <Query query={viewerLast100Repositories}>
    {({ loading, error, data }) => {
      if (loading) {
        return (
          <Grid direction="row" justify="center" container spacing={2} style={{ padding: 24 }}>
            <Loader size={300} />
          </Grid>
        );
      }
      if (error) {
        return (
          <Grid direction="row" justify="center" container spacing={2} style={{ padding: 24 }}>
            <Typography variant="subtitle2">Please Sign In to fetch data</Typography>
          </Grid>
        );
      }
      return (
        <>
          {data.viewer.repositories.edges.map((repo) => (
            <Grid key={repo.node.id} item xs={6} sm={4} lg={3} xl={2}>
              <SimpleCard
                title={repo.node.name}
                description={repo.node.description}
                url={repo.node.url}
              />
            </Grid>
          ))}
        </>
      );
    }}
  </Query>
);

export default ViewerRepoList;
