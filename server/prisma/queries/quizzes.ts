// const quizId = '5d5eae4a027439000708c3bb';
// const questionId = '5d5eb05d027439000708c3bd';

export function connectQuestionToQuiz(quizId: string, questionId: string): object {
  return {
    query: /* GraphQL */ `
      mutation AddQuestionToQuiz($data: QuizUpdateInput!, $where: QuizWhereUniqueInput!) {
        updateQuiz(data: $data, where: $where) {
          id
          title
          summary
          createdAt
          questions {
            title
            description
            choices {
              content
              imageUrl
            }
          }
        }
      }
    `,
    variables: {
      data: {
        questions: {
          disconnect: {
            id: questionId,
          },
        },
      },
      where: {
        id: quizId,
      },
    },
  };
}
