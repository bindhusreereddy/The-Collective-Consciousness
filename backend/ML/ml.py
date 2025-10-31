import pandas as pd
import numpy as np
import tensorflow 
import tensorflow.keras
from tensorflow.keras.preprocessing.sequence import TimeseriesGenerator

filename = r"data.csv"
df = pd.read_csv(filename)
print(df.info())

value = df['value'].values
value = value.reshape((-1,1))

split_percent = 0.80
split = int(split_percent*len(value))

x_train = value[:split]
x_test = value[split:]

look_back = 5

train_generator = TimeseriesGenerator(x_train, x_train, length=look_back, batch_size=10)     
test_generator = TimeseriesGenerator(x_test, x_test, length=look_back, batch_size=1)

from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense

model = Sequential()
model.add(
    LSTM(10,
        activation='relu',
        input_shape=(look_back,1))
)
model.add(Dense(1))
model.compile(optimizer='adam', loss='mse')

num_epochs = 25
model.fit_generator(train_generator, epochs=num_epochs, verbose=1)

prediction = model.predict_generator(test_generator)

x_train = x_train.reshape((-1))
x_test = x_test.reshape((-1))
prediction = prediction.reshape((-1))

value = value.reshape((-1))

def predict(num_prediction, model):
    prediction_list = value[-look_back:]
    
    for _ in range(num_prediction):
        x = prediction_list[-look_back:]
        x = x.reshape((1, look_back, 1))
        out = model.predict(x)[0][0]
        prediction_list = np.append(prediction_list, out)
    prediction_list = prediction_list[look_back-1:]
        
    return prediction_list

num_prediction = 5
forecast = predict(num_prediction, model)
print(forecast)
