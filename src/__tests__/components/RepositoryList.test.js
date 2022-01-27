import { RepositoryListContainer } from "../../components/RepositoryList";
import { render, within } from "@testing-library/react-native";

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      const { getAllByTestId, debug } = render(<RepositoryListContainer repositories={repositories} />);

      const repositoryItems = getAllByTestId('repositoryItem');
      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;

      // First repository item
      const details = within(firstRepositoryItem).getByTestId('details');
      const name = within(details).getByText('jaredpalmer/formik');
      const description = within(details).getByText('Build forms in React, without the tears');
      const language = within(details).getByText('TypeScript');

      const analytics = within(firstRepositoryItem).getByTestId('analytics');
      const stars = within(analytics).getByText('21.9k');
      const forks = within(analytics).getByText('1.6k');
      const rating = within(analytics).getByText('88');
      const reviews = within(analytics).getByText('3');

      expect(name).toBeDefined();
      expect(description).toBeDefined();
      expect(language).toBeDefined();

      expect(stars).toBeDefined();
      expect(forks).toBeDefined();
      expect(rating).toBeDefined();
      expect(reviews).toBeDefined();

      // Second repository item
      const details2 = within(secondRepositoryItem).getByTestId('details');
      const name2 = within(details2).getByText('async-library/react-async');
      const description2 = within(details2).getByText('Flexible promise-based React data loader');
      const language2 = within(details2).getByText('JavaScript');

      const analytics2 = within(secondRepositoryItem).getByTestId('analytics');
      const stars2 = within(analytics2).getByText('1.8k');
      const forks2 = within(analytics2).getByText('69');
      const rating2 = within(analytics2).getByText('72');
      const reviews2 = within(analytics2).getByText('3');

      expect(name2).toBeDefined();
      expect(description2).toBeDefined();
      expect(language2).toBeDefined();

      expect(stars2).toBeDefined();
      expect(forks2).toBeDefined();
      expect(rating2).toBeDefined();
      expect(reviews2).toBeDefined();
    });
  });
});