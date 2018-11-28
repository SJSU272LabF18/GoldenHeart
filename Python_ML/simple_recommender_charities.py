import pandas as pd
# Load Movies Metadata
metadata = pd.read_csv('charity_mission_clean.csv', low_memory=False)
print(metadata.head(3))
q_movies = metadata.sort_values('overall_score', ascending=False)
print(q_movies['charity_name'].head(13))