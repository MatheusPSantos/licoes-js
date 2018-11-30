#include <stdio.h>

int main() {
	int m = 0, n = 0;
	printf("m: ");
	scanf("%d", &m);
	printf("n: ");
	scanf("%d", &n);

	int a[m][n];
	int b[m][n];
	int i, j;
	printf("\nmatriz a: \n");
	for(i = 0; i < m; i++) {
		for(j = 0; j < n; j++) {
			scanf("%d", &a[i][j]);
		}
	}

	printf("\nMatriz b: \n");
	for(i = 0; i < m; i++) {
		for(j = 0; j< n; j++) {
			scanf("%d", &b[i][j]);
		}
	}

	int c[m][n];

	for(i = 0; i < m; i ++) {
		for(j = 0; j < n; j++) {
			c[i][j] = b[i][j] + a[i][j];
		}
	}

	printf("Resultado da soma \n");
	for(i = 0; i < m; i++) {
		for(j = 0; j < n; j++) {
			printf("[%d]", c[i][j]);
		}
		printf("\n");
	}

	return 0;
}

