# Dockerfile
# Use ruby image to build our own image
FROM ruby:2.7
# We specify everything will happen within the /app folder inside the container
WORKDIR /app
# We copy these files from our current application to the /app container
COPY Gemfile Gemfile.lock ./
# We install all the dependencies
RUN gem install bundler:1.17.2
RUN bundle update --bundler
RUN bundle install
# We copy all the files from our current application to the /app container
COPY . .
# We expose the port
EXPOSE 3000
RUN rails db:migrate

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]